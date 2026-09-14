// REACT Practice1 : Practice1 과 Profile 컴포넌트를 구현하여 그림과 같이 완성하시오.
// AXIOS 이용하여 서버로 부터 받은 데이터/자료 가정
export default function Practice1( props ){
  const data = [
    { name: 'Hedy Lamarr', imageUrl: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Grace Hopper', imageUrl: 'https://i.pravatar.cc/150?img=48' },
    { name: 'Ada Lovelace', imageUrl: 'https://i.pravatar.cc/150?img=49' },
    { name: 'Margaret Hamilton', imageUrl: 'https://i.pravatar.cc/150?img=50' }
  ];

  return (<> 
      <Profile2 show={() => data.map((i) => (<>
            <h3>{i.name}</h3>
            <img src={i.imageUrl} alt={i.name} />
        </>
      ))} />
      {
        data.map((e)=>{ return(<>
            <Profile name={e.name} imageUrl={e.imageUrl}></Profile>
        </>) })
      }
  </>)
} // func end 

function Profile( props ) { 
  return (<>
    <h3> {props.name} </h3>
    <img src={props.imageUrl}></img>
  </> );
} // func end 

function Profile2(props){
    return props.show()
}