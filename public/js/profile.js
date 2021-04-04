const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  
  const description = document.querySelector('#description').value.trim();

  if (name && description) {
    const response = await fetch(`/api/pet`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create pet');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete pet');
    }
  }
};

// DONT TOUCH YET
      $(document).ready(function() {
        let imagesPreview = function(input, placeToInsertImagePreview) {
          if (input.files) {
            let filesAmount = input.files.length;
            for (i = 0; i < filesAmount; i++) {
              let reader = new FileReader();
              reader.onload = function(event) {
                $($.parseHTML("<img>"))
                  .attr("src", event.target.result)
                  .appendTo(placeToInsertImagePreview);
              };
              reader.readAsDataURL(input.files[i]);
            }
          }
        };
        $("#input-files").on("change", function() {
          imagesPreview(this, "div.preview-images");
        });
      });
  //======================


document
  .querySelector('.new-pet-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.pet-list')
  .addEventListener('click', delButtonHandler);



