
let articleType='react'
function getArticle(){
  if(articleType==='react'){
    return <h1>React</h1>}
}
function App() {
  const list=[1,2,3]
  return (
    <div className="App">
      <ul>
        {list.map(item=><li key={item}>item</li>) }
      </ul>
      {getArticle()}
    </div>
  );
}

export default App;
