/* let projects = [
    {
        ID: 'MoveX-React-Modal',
        showBtnId: 'Show-MoveX-React-Modal'
    },
    {
        ID: 'MoveX-Angular-Modal',
        showBtnId: 'Show-MoveX-Angular-Modal'
    }
]; */

const projects = ['MoveX-React-Modal', 'MoveX-Angular-Modal'];

projects.forEach(project => {
    // Get the button that opens the modal
    /* let btn = document.getElementById(project.showBtnId); */
    let btn = document.querySelector('#Show-' + project);

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        // Get and display the modal
        var modal = document.getElementById(project);
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

        // Get the <span> element that closes the modal and close the modal onclick
        /* let close = document.getElementById(project.closeBtnId); */
        /* let close = document.getElementsByClassName('closeModal'); */
        let close = document.querySelector('#' + project + ' .closeModal');
        close.onclick = function () {
            modal.style.display = "none";
        }
    }
});

