import React from "react";

export default function Cards({ birdData, clickBird }) {

    return (
        <div className='birds'>
            {birdData.map((bird) => {
                return (
                    <div>
                        <h4>{bird.name}</h4>
                        <p>{bird.amount}</p>
                        <img className="bird-image" src={bird.img} alt={`${bird.name}`}></img>
                        <button className="adopt"
                            onClick={() => {
                                clickBird(bird);
                            }}>
                            Adopt
                        </button>
                    </div>
                )
            })}
        </div>
    )
}