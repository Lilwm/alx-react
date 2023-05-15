import $ from 'jquery';
import debounce from 'lodash/debounce';

let count = 0;

function updateCounter(){
    count ++;
    $('#count').text('{count}clicks on the button')
}

(function(){
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started </button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<button>Copyright - Holberton School </button>');
    $('#start-btn').on('click', debounce(updateCounter, 500));
});