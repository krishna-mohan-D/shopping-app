import React from 'react'

export default function Filter(props) {
    return (
        <div className="row">
            <div className="col-md-4">{props.count} products</div>
            <div className="col-md-4">
                <label>
                    Order By 
                    <select className="form-control" value={props.sort} onChange={props.handleChangeSort}>
                        <option value=''>select</option>
                        <option value="lowest">lowest to highest</option>    
                        <option value="highest">highest to lowest</option>
                    </select>
                </label>
            </div>
            <div className="col-md-4">
                <label>
                    Size By 
                    <select className="form-control" value={props.size} onChange={props.handleChangeSize}>
                        <option value=''>All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="X">X</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        
                    </select>
                </label>
            </div>
        </div>
    )
}
