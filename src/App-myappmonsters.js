import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  /* Klasa ima svoj kontruktor koji mora imati super()  */
  constructor() {
    super();
   /* Definise se prazan niz montsers kao niz koji predstavlja state komponentu na nivou cele app */ 
    this.state = {
      monsters: [],
      searchField: ''
    };

    /* Ovaj red mora postojati ako se ne koriste ero function da bi se ovaj metod povezao sa modulom app 
    this.handleChange = this.handleChange.bind(this);*/
  }
  
  /* handleChange metod napisan kao handleChange(e) {...} mora da prati i dodatak u class - i koja koristi ovj metod na gore naveden nacin 
  
  handleChange(e) {
    this.setState({searchField: e.target.value} , () => console.log(this.state))
  } */
  /* ero function ide sa => i ona automatski radi bind sa klasom  */

  handleChange = e => {
    this.setState({searchField: e.target.value} , () => console.log(this.state));
  }

  /* U toku postavljanja ove komponenter App, treba da se ucitaju podaci sa lokacije koja je navedena */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    /* Nakon komande za fetch odgovor je users koji treba konvertovati u json  */
    .then(response => response.json())
    /* Nakon toga postavi stanje monsters na users */
    .then(users => this.setState({ monsters: users}))
  }

  render() {
      /* Pre rendera definisu se promenljive koje ce odgovarati this.state - u*/
      const { monsters, searchField} = this.state;
      /* Definise se novi niz koji nastaje kao filtriran niz sa sintaksom - niz predstavlja deo niza 
      monsters, a sintaksa kaze da ce svaki clan niza monsters, nazvan monster, biti uporedjen sa unetim sadrzajem
      u polje searchField. Zbog tacnog uporedjenja oba stringa se postavljaju kao mala slova. */
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );

    return(
      <div className='App'>
        {/* Input komponenta typa searc , a sta se trazi u polju input sivim slovima pise u atributu placeholder
        Dodata je metoda u ovom input polju na promenu onChange u {} zagradama. Ovo je da prikaze u console e kao event
        objekat od koga trazimo properties target.value (ono sto kucamo.)
        {e=> console.log(e.target.value)}. Da bi promenili stanje searchField potrebno je da kazemo this.setstate */}

        {/* Ukoliko se na onChange zeli akcija nakon unosa svakog karaktera potrebno je definisati callback funciju koja se 
        pise kao drugi parametar setState metode, inace ako damo komandu console.log ... posle steState u state ce se videti
        uvek predhodna izmena.*/}

        {/* Ovaj deo ce se prebaciti u funkcijsku komponentu SearchBox 
        
        <input 
          type='search' 
          placeholder='search monsters' 
          onChange={e=> this.setState({searchField: e.target.value} , () => console.log(this.state))}/> */}
        
        {/*
          Sledeca lekcija izmesta handleChange prop u deo definisanja funkcija u istom modulu.

        <SearchBox 
          placeholder='search monsters'
          handleChange={e=> this.setState({searchField: e.target.value} , () => console.log(this.state))}
        /> */}

        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
           />


        {/* Tab je komponenta CardList koja je importovana na vrhu, props je niz monsters, odnosno state.monsters
          poziva se komponenta CardList sa props (parametrima) stanja monsters (this.state.monsters).
          Osnovna verzija ako props u CardList prosledjuje {this.state.monsters}, medjutim potrebno je kao props
          proslediti filtrirani niz (filteredMonsters), tako ce uvek biti prikazan onaj broj clanova koji zadovoljavaju
          kriterijum koji je unet u filter polju.
          */}
        <CardList monsters={filteredMonsters}> 
        </CardList>
      </div>
    );
  }
}

export default App;
