
// BLOG PAGE COMMENT FORM(this is so messy and some of it could probably overlap with the contact form)
// we are posting comments
const commentForm = document.getElementById('comment-form');
const commentSection = document.getElementById('comments');

// my script wont run on other pages because of this event listenr so like if commentform is null dont do anyhting
if (commentForm !== null) {
    // when submit happens on commentForm,
    commentForm.addEventListener('submit', function(e) {
        // prevent default refresh
        e.preventDefault();

        // grab information from input name and put in variable
        const userName = commentForm.querySelector('input[name=user-name]').value;

        // do i really need the value of the 'input[name=email]'email here? no. because i dont ever want to get in touch with these commenters or track them. they comment into the void and send those babies into the world with no lifeline.

        // take information from textarea and put in variable
        const comment = commentForm.querySelector('textarea').value;

        // make a div.comment with the basic comment html
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
        <div class="comment">
            <div class="img-container">
                <img src="./assets/user-default.jpg" alt="default user profile image, tis bear6">
            </div>
            <div class="text-container">
                <p class="comment-info"></p>
                <p id="comment"></p>
            </div>
        </div>`;

        // find .comment-info and put userName in it
        const commentInfo = newComment.querySelector('.comment-info');
        // ugh formatting date in vanilla js is way to much work for me rn
        // const date = Date();
        // commentInfo.textContent = `${date}, by ${userName}`;
        commentInfo.textContent = `Posted at a point in time, by ${userName}`;

        // find that body and put the comment in it
        const commentBody = newComment.querySelector('#comment');
        commentBody.textContent = comment;

        // add the newly made comment to the comment section
        commentSection.appendChild(newComment);

        // reset form after everything is done
        commentForm.reset();
    });
};


// EMAIL FORM
const contactForm = document.getElementById('contact-form');

// if contact form doesnt exist on this page do nothing
if (contactForm !== null) {
    // when submit happens on contactForm, 
    contactForm.addEventListener('submit', function(e) {
        // prevent default refresh
        e.preventDefault();

        // grab information from input name/input email/textarea and put them in variables
        const userName = contactForm.querySelector('input[name=user-name]').value;
        const email = contactForm.querySelector('input[name=email]').value;
        const message = contactForm.querySelector('textarea').value;

        // alert user that though their message was ackownledged, the developer didnt connect a form handler
        alert(`hello ${userName}! Sadly we wont be getting back to you at ${email}, but you've successfully sent this message into the void:
        ${message}`);
        // i can make a pop up for this?
        // like style a div.message-popup then make a div.message-popup with the alert content(not inputed as any sort of html since it uses user inputs) and a button that i can listen for a click to get rid of the element. worth trying later.

        // reset form after everything is done
        contactForm.reset();
    });
};


// ABOUT PAGE LINK ERROR
    // kevinZ said he did an error for the about link in his menu so i thought id throw one in too since it seemed easier than the carousel im trying to make work
// grab about page anchor
const aboutPage = document.getElementById('about');
// listen for click
aboutPage.addEventListener('click', function() {
    // when clicked give user an alert error that developer has neglected to make this page oops
    alert("Oh sorry 'bout that, the developer neglected to make an About Page for you to visit. :(");
});



// ATTEMPT AT CAROUSEL-ISH GALLERY
// it doesnt look very nice but that's mostly styling so i can do it later

const galleryList = document.querySelectorAll('.gallery-item');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
let displayedItem = 0;

// if gallery list exists do shit
if (galleryList !== null) {
    // listen for click on previous button
    const previous = previousButton.addEventListener('click', function() {
        changeDisplayedItem(galleryList[displayedItem]);
        if (displayedItem === 0) {
            displayedItem = 2;
        } else if (displayedItem === 1) {
            displayedItem = 0;
        } else {
            displayedItem = 1;
        };
        changeDisplayedItem(galleryList[displayedItem]);
    });
    const next = nextButton.addEventListener('click', function() {
        changeDisplayedItem(galleryList[displayedItem]);
        if (displayedItem === 0) {
            displayedItem = 1;
        } else if (displayedItem === 1) {
            displayedItem = 2;
        } else {
            displayedItem = 0;
        };
        changeDisplayedItem(galleryList[displayedItem]);
    });
}

function changeDisplayedItem(item) {
    // swap displayed and not-displayed classes 
    item.classList.toggle('displayed');
    item.classList.toggle('not-displayed');
}

console.log(galleryList);



// // when button next button is pressed, the current image toggles it displayed and not-displayed to be false/true, then the next target does the oposite

