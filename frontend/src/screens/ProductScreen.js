import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data'; // attention ici a ne pas mettre data.js , je sais pas pk ca ne marche pas


export default function Productcreen(props) {
    // props.match.params.id . cette value est égale à la valeur envoyé par user sur App.js dans "/product/:id"
    const product = data.products.find(x => x._id === props.match.params.id)
    // on compare donc la valeur id du produit choisi par user avec la liste des produits
    if(!product){
        return <div>Le produit selectionné est inaccessible</div>
    }
    return (
        <div>
            <Link to="/product/">Retour</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            {/* Je rajoute les attributs pour recupe les valeurs de rating et numReview du bon product */}
                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                        </li>
                        <li>
                            Prix : {product.price}€
                        </li>
                        <li>
                            {product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Prix :  </div>
                                    <div> {product.price}€  </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Disponibilité :  </div>
                                    <div> {product.countInStock > 0 ? (
                                        <span className="success"> En stock</span>
                                        ) : (
                                        <span className="danger"> Rupture de stock</span>
                                    )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Ajouter au panier</button>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    )
}
