import { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id' :1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '박민석',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
}, 

{
  'id' :2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '970302',
  'gender' : '남자',
  'job' : '프로그래머'
},

{
  'id' :3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이민정',
  'birthday' : '960723',
  'gender' : '여자',
  'job' : '편집자'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map (c => {
            return (
              <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
            );
          })
        }
      
      </div>
    );
  }
}

export default App;
