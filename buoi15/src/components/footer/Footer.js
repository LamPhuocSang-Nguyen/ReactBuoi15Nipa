import "./footer.css"

function Footer(props){
    //it is a style in coding react becuase it is clearly for reader.
    const {name1, age1}=props;
    const x=5;
    const arr=[{name:"Le Meo", age:5}, {name: "le Tho", age:2}, {name:"Le Nai", age:4}];
    return(
        <>
            <div className="footer" id="footer1">
                Footer1
                <h1>X = {x}</h1>
                <h1>Ten: {name1}</h1>
                <h1>Tuoi: {age1}</h1>

                {
                    arr&&arr.map((item, index)=> (<p key={index}>{item.name}</p>))
                }
            </div>

            <div className="footer">
                Footer2
            </div>
        </>
    )
}

export default Footer;