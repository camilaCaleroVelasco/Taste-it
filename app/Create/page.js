'use client';
import Link from 'next/link';
import { useState } from 'react';
import Hdr from '../components/Hdr';
import Button from '../components/Button';
import './page.css';

const CreatePage = () => {

    const [recipeInput, setRecipeInput] = useState({
        enteredTitle: '',
        enteredDescription: '',
        enteredLink: '',
        enteredIngredients: '',
        enteredMeasurements: '',
        enteredRecommendedTools: '',
        enteredMedia: '',
        enteredDirections: ''
      });

      const titleChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredTitle: event.target.value};
        });
      };

      const descriptionChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredDescription: event.target.value};
        });
      };

      const linkChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredLink: event.target.value};
        });
      };

      const ingredientsChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredIngredients: event.target.value};
        });
      };

      const measurementsChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredMeasurements: event.target.value};
        });
      };

      const recommendedToolsChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredRecommendedTools: event.target.value};
        });
      };

      const mediaChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredMedia: event.target.value};
        });
      };

      const directionsChangeHandler = (event) => {
        setRecipeInput((prevState) => {
          return { ...prevState, enteredDirections: event.target.value};
        });
      };

      const submitHandler = (event) => {
        event.preventDefault();
          const recipe = {
            title: recipeInput.enteredTitle,
            description: recipeInput.enteredDescription,
            link: recipeInput.enteredLink,
            ingredients: recipeInput.enteredIngredients,
            measurements: recipeInput.enteredMeasurements,
            recommendedTools: recipeInput.enteredRecommendedTools,
            media: recipeInput.enteredMedia,
            directions: recipeInput.enteredDirections
        };
          
        console.log(recipe);

        setRecipeInput({
            enteredTitle: '',
            enteredDescription: '',
            enteredLink: '',
            enteredIngredients: '',
            enteredMeasurements: '',
            enteredRecommendedTools: '',
            enteredMedia: '',
            enteredDirections: ''
          });
        }

    return (
        <div class='home'>            
            <Hdr />

            <form onSubmit={submitHandler}>
                <div class='column'>
                    <div class='part'>
                        <label>Title</label>
                        <input 
                            id='title' 
                            type='text'
                            value={recipeInput.enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>

                    <div class='part'>
                        <label>Description</label>
                        <input 
                            id='description' 
                            type='text'
                            value={recipeInput.enteredDescription}
                            onChange={descriptionChangeHandler}
                        />
                    </div>

                    <div class='part'>
                        <label>Link</label>
                        <input 
                            id='link' 
                            type='text'
                            value={recipeInput.enteredLink}
                            onChange={linkChangeHandler}
                        />
                    </div>

                    <div class='part'>
                        <label>Ingredients</label>
                        <input 
                            id='ingredients' 
                            type='text'
                            value={recipeInput.enteredIngredients}
                            onChange={ingredientsChangeHandler}
                        />
                    </div>

                    <div class='part'>
                        <label>Measurements</label>
                        <input 
                            id='measurements' 
                            type='text'
                            value={recipeInput.enteredMeasurements}
                            onChange={measurementsChangeHandler}
                        />
                    </div>

                    <div class='part'>
                        <label>Recommended Tools</label>
                        <input 
                            id='recommendedTools' 
                            type='text'
                            value={recipeInput.enteredRecommendedTools}
                            onChange={recommendedToolsChangeHandler}
                        />
                    </div>
                </div>

                <div class='column'>
                <div class='part'>
                        <label>Photos and Videos</label>
                        <input 
                            id='media' 
                            type='text'
                            value={recipeInput.enteredMedia}
                            onChange={mediaChangeHandler}
                        />
                    </div>

                    <div class='part'>
                        <label>Directions</label>
                        <input 
                            id='directions' 
                            type='text'
                            value={recipeInput.enteredDirections}
                            onChange={directionsChangeHandler}
                        />
                    </div>

                    <Button type='submit'>Create!</Button>
                </div>

            </form>
        </div>
        
    )
}

export default CreatePage
