class Dropdown {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    init() {
        this.dropdown.forEach(box => {
            box.addEventListener('click', () => {
                const trigger = box.querySelector('.trigger');
                const content = box.querySelector('.content');
                trigger.classList.toggle('active');
                content.classList.toggle('active');
            })
        })
    }
}

export default Dropdown;