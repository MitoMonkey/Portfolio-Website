/* const projects = ['Portfolio', 'MoveX_Angular', 'MoveX_React', 'MoveX_API', 'MeetApp', 'CHATzam'];
projects.forEach(project => {
    // Get the button that opens the modal
    let btn = document.querySelector('#Show-' + project + '-Modal');

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        // Get and display the modal
        var modal = document.getElementById(project + '-Modal');
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
        let close = document.querySelector('#' + project + '-Modal' + ' .closeModal');
        close.onclick = function () {
            modal.style.display = "none";
        }
    }
}); */

/* get all read-more buttons */
const btns = document.querySelectorAll('.read-more');
btns.forEach(btn => {

    /* "assamble" the div id */
    let project = '#' + btn.id + '_container';

    /* get the corresponding modal div */
    let modal = document.querySelector(project);

    // When the user clicks on the read-more button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        /* modal.style.opacity = 1; */
        /* modal.classList.add('show'); */
    }

    // When the user clicks anywhere outside of the modal, close it (.modal is actually the overlay and does not include .modal-content)
    modal.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // close the modal when user presses ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });

    // Get the <span> element that closes the modal and close the modal onclick
    let close = document.querySelector(project + ' .closeModal');
    close.onclick = function () {
        modal.style.display = "none";
    }
});