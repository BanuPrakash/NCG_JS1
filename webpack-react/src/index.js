import forEach, {add, filter} from './lib'
import Person from './Person' 
import {random} from 'lodash'
import "./styles.css"
var products = [
    { "name": "iPhone 15", "price": 98000.00, "category": "mobile" },
    { "name": "Samsung Tv", "price": 278000.00, "category": "tv" },
    { "name": "Wacom", "price": 45000.00, "category": "computer" },
    { "name": "Logitech Mouse", "price": 800.00, "category": "computer" },
    { "name": "OnePlus 15", "price": 120000.00, "category": "mobile" }
]

function isMobile(p) {
    return p.category === 'mobile';
}

var mobiles = filter(products, isMobile);

forEach(mobiles, console.log);

console.log(random(1, 100));

let p = new Person("Dia", 24);

console.log(p.getName(), p.getAge());

// XML
let Book = <div className='card'>
    <h1 className='header'>React Complete Ref</h1>
    <div className='body'>
        Rs. 1241.11
    </div>
</div>

console.log(Book);