import "./MealItem.css";
import img from "../../images/Breakfast/breakfast-1.jpg";

function MealItem(prop) {
    return (
        <>
            <div className="image-box col-5 bg-yellow">
                <img src={prop.image} alt="" className="rounded-circle" />
            </div>
            <div className="discribe-content d-column flex-column justify-content-center alifn-item-center">
                <div className="title-price d-flex align-items-start">
                    <h3 className="yekan fs-4 px-2">{prop.food}</h3>
                    <span className="price m-2">{prop.price}</span>
                </div>
                <p className="component-food px-3 mt-4">{prop.Components}</p>
            </div>
        </>
    );
}

export default MealItem;
