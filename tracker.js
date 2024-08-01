document.addEventListener('DOMContentLoaded', () => {
    const enableButton = document.getElementById('enable-tracker');
    const disableButton = document.getElementById('disable-tracker');
    const timeTable = document.getElementById('timeTable');
    const siteNameElement = document.getElementById('site-name');
    const siteTimeElement = document.getElementById('site-time');
    let tracking = false;
    let currentTabId = null;
    let startTime = null;
    let intervalId = null;

    function startTracking() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                currentTabId = tabs[0].id;
                startTime = Date.now();
                tracking = true;
                enableButton.disabled = true;
                disableButton.disabled = false;
                updateCurrentSite();
                intervalId = setInterval(updateTime, 1000);
            }
        });
    }

    function stopTracking() {
        if (tracking) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    const endTime = Date.now();
                    const timeSpent = endTime - startTime;
                    chrome.storage.local.get([currentTabId], (result) => {
                        const newTimeSpent = (result[currentTabId] || 0) + timeSpent;
                        chrome.storage.local.set({ [currentTabId]: newTimeSpent });
                        clearInterval(intervalId);
                        tracking = false;
                        enableButton.disabled = false;
                        disableButton.disabled = true;
                        updateCurrentSite();
                    });
                }
            });
        }
    }

    function updateTime() {
        const now = Date.now();
        const timeSpent = Math.floor((now - startTime) / 1000);
        siteTimeElement.textContent = `Time Spent: ${timeSpent} s`;
    }

    function updateCurrentSite() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const tab = tabs[0];
                siteNameElement.textContent = new URL(tab.url).hostname;
                chrome.storage.local.get([tab.id], (result) => {
                    const timeSpent = result[tab.id] || 0;
                    siteTimeElement.textContent = `Time Spent: ${(timeSpent / 1000).toFixed(2)} s`;
                });
            } else {
                siteNameElement.textContent = 'N/A';
                siteTimeElement.textContent = 'Time Spent: 0 s';
            }
        });
    }

    enableButton.addEventListener('click', startTracking);
    disableButton.addEventListener('click', stopTracking);

    // Populate the records table
    chrome.storage.local.get(null, (items) => {
        const sortedItems = Object.entries(items).sort((a, b) => b[1] - a[1]);
        sortedItems.forEach(([tabId, time]) => {
            chrome.tabs.get(parseInt(tabId), (tab) => {
                const row = document.createElement('tr');
                const websiteCell = document.createElement('td');
                const timeCell = document.createElement('td');
                
                websiteCell.textContent = tab ? new URL(tab.url).hostname : 'Unknown';
                timeCell.textContent = (time / 1000).toFixed(2); // Convert to seconds

                row.appendChild(websiteCell);
                row.appendChild(timeCell);
                timeTable.appendChild(row);
            });
        });
    });
});
