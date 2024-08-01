// option.js

document.addEventListener('DOMContentLoaded', () => {
    const optionsForm = document.getElementById('options-form');

    optionsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(optionsForm);
        const options = {};
        formData.forEach((value, key) => {
            options[key] = value;
        });

        // Save options to storage
        chrome.storage.sync.set({ options }, () => {
            alert('Options saved');
        });
    });

    // Load saved options
    chrome.storage.sync.get('options', (data) => {
        if (data.options) {
            Object.keys(data.options).forEach(key => {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = data.options[key];
                }
            });
        }
    });
});
