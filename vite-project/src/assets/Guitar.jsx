import React from 'react';

class Guitar extends React.Component {
  playNote = (note) => {
    console.log(`Sonando la nota ${note}`);
  }

  render() {
    return (
      <div>
        <h1>Notas de Guitarra</h1>
        <button onClick={() => this.playNote('E')}>E</button>
        <button onClick={() => this.playNote('A')}>A</button>
        <button onClick={() => this.playNote('D')}>D</button>
        <button onClick={() => this.playNote('G')}>G</button>
        <button onClick={() => this.playNote('B')}>B</button>
        <button onClick={() => this.playNote('E2')}>E</button>
      </div>
    );
  }
}

export default Guitar;
