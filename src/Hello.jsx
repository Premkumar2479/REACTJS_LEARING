
function Hello() {
   

    const getName = (yourname) =>{
        return yourname ;
    };

        const name = "CHOCO"
        const name1 = "BABA"


  return ( 
    <>
    <h1>Hello {getName(name)}</h1>
    <h2> {getName(name1)}</h2>
    </>
  );
}

export default Hello;