let projects = [
    {
        ID: 'MoveX-React-Modal',
        showBtnId: 'Show-MoveX-React-Modal',
        closeBtnId: 'Close-MoveX-React-Modal'
    },
    {
        ID: 'MoveX-Angular-Modal',
        showBtnId: 'Show-MoveX-Angular-Modal',
        closeBtnId: 'Close-MoveX-Angular-Modal'
    }
];


projects.forEach(project => {
    // Get the button that opens the modal
    var btn = document.getElementById(project.showBtnId);

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        // Get and display the modal
        var modal = document.getElementById(project.ID);
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it (.modal is actually the overlay and does not include .modal-content)
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        // hide the modal when user presses ESC key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === "block") {
                modal.style.display = "none";
            }
        });

        // Get the <span> element that closes the modal
        let close = document.getElementById(project.closeBtnId);
        /* let close = document.getElementsByClassName('closeModal'); */
        // When the user clicks on <span> (x), close the modal
        close.onclick = function () {
            modal.style.display = "none";
        }
    }
});

