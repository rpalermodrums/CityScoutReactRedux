/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';
import Slider from '../components/preference_slider'

const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
const SliderContainer = class extends Component {
  render() {
    return(
      <form>
        {categories.map((category, idx) => {
          return(
            <div>
              <label>{category}</label>
              <Slider key={idx} category={category} id={category}/>
            </div>
          )
        })}
        <input type="submit" />
      </form>
    )
  }
};

export default SliderContainer