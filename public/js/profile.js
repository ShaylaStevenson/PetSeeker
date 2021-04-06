// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name').value.trim();
//   const animal_type = document.querySelector('#animal_type').value.trim();
//   const breed = document.querySelector('#breed').value.trim();
//   const description = document.querySelector('#description').value.trim();
//   const age = document.querySelector('#age').value.trim();
//   const gender = document.querySelector('#gender').value.trim();
//   const size = document.querySelector('#size').value.trim();
//   const good_with_kids = document.querySelector('#good_with_kids:checked') ? true : false;
//   const good_with_dogs = document.querySelector('#good_with_dogs:checked') ? true : false;
//   const good_with_cats = document.querySelector('#good_with_cats:checked') ? true : false;
//   const zodiac = document.querySelector('#zodiac').value.trim();
//   const special_needs = document.querySelector('#special_needs:checked') ? true : false;
//   const adoptable_now = document.querySelector('#good_with_dogs:checked') ? true : false;
//   const contact_email = document.querySelector('#contact_email').value.trim();

//   if (name && animal_type && breed && description && age && gender && size && good_with_kids && good_with_dogs && good_with_cats && zodiac && special_needs && adoptable_now && contact_email) {
//     const response = await fetch(`/api/pets`, {
//       method: 'POST',
//       body: JSON.stringify({ name, animal_type, breed, description, age, gender, size, good_with_kids, good_with_dogs, good_with_cats, zodiac, special_needs, adoptable_now, contact_email }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create pet');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/pets/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete pet');
//     }
//   }
// };

// // DONT TOUCH YET
//       $(document).ready(function() {
//         let imagesPreview = function(input, placeToInsertImagePreview) {
//           if (input.files) {
//             let filesAmount = input.files.length;
//             for (i = 0; i < filesAmount; i++) {
//               let reader = new FileReader();
//               reader.onload = function(event) {
//                 $($.parseHTML("<img>"))
//                   .attr("src", event.target.result)
//                   .appendTo(placeToInsertImagePreview);
//               };
//               reader.readAsDataURL(input.files[i]);
//             }
//           }
//         };
//         $("#input-files").on("change", function() {
//           imagesPreview(this, "div.preview-images");
//         });
//       });
//   //======================


// document
//   .querySelector('#new-pet-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.pet-list')
//  // .addEventListener('click', delButtonHandler);



