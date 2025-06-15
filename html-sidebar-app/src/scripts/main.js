const sidebarEntries = Array.from({ length: 28 }, (_, i) => `Entry ${i + 1}`);
const contentArea = document.getElementById('content');
const sidebar = document.getElementById('sidebar');

sidebarEntries.forEach((entry, index) => {
    const entryElement = document.createElement('div');
    entryElement.textContent = entry;
    entryElement.classList.add('sidebar-entry');
    
    entryElement.addEventListener('click', () => {
        contentArea.textContent = `Content for ${entry}`;
    });
    
    sidebar.appendChild(entryElement);
});