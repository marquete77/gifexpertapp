import React, {useState} from 'react';
import AddCategory from "./components/AddCategory";
import GidGrid from "./components/GidGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GidGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </div>
    );
};

export default GifExpertApp;
