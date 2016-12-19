import React from 'react';

class Btn extends React.Component {
    render() {
      const { increment, decrement,decrement2 } = this.props;

      return (
        <div>
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
          <button onClick={decrement2}> -2 </button>
        </div>
      )
    }
} 

export default Btn;