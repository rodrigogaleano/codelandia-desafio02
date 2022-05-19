import React from "react";

function Destaques() {

    return (
        <div className="destaques">
            <div className="destaques-texto">
                <h2>Destaques</h2>
                <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado</p>
            </div>
            <div className="destaques-grade">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                        <div className="card">
                            <img src={require(`../Assets/Images/${item}.png`)} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Destaques;