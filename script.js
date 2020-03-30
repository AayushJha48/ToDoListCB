// jshint esversion:6

let ul = $('ul');
let data = $("#NewTask");
let addBtn = $(".btn-success");
let clearBtn = $('.btn-danger');
let delBtn = $(".btn-warning");
let sortBtn = $('.btn-primary');

// Add new elements in the input list ...
// And Check the done items or undo the done items ...

function addItem() {
  let listItem = $('<li>', {
    'class': 'list-group-item',
    text: data.val(),
  });
  ul.append(listItem);
  listItem.click(function (e) {
    $(this).toggleClass('disabled');
    changeState();
  });
  data.val('');
  changeState();
}

// Add Event by clicking addBtn
addBtn.click(() => {
  addItem();
});

// Add element using Enter button
$(document).keypress( function (e) {
  if(e.key == 'Enter' && data.val() != ''){
    addItem();
  }
});

// Clear  the input box ...
clearBtn.click(() => {
  data.val('');
  changeState();
});


// Delete the completed works ...
delBtn.click(function () {
  $('li.disabled').remove();
  changeState();
});

// Sort the Completed works
sortBtn.click(function () {
  $('li.disabled').appendTo(ul);
  changeState();
});

// Enabled / Disabled button states

function adClrState() {
  if(data.val() == ''){
    addBtn.addClass('disabled');
    clearBtn.addClass('disabled');
  } else {
    addBtn.removeClass('disabled');
    clearBtn.removeClass('disabled');
  }
}

data.on('input', adClrState);

function changeState(){
  adClrState();
  if (ul.children().length == 0){
    delBtn.addClass('disabled');
  } else {
    delBtn.removeClass('disabled');
  }
  if(ul.children('li.disabled').length == 0){
    sortBtn.addClass('disabled');
  } else {
    sortBtn.removeClass('disabled');
    console.log('...');
  }
}

changeState();
