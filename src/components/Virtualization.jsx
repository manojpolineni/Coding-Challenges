import React, { useEffect, useState } from 'react'
import { FixedSizeList as List } from 'react-window';

const Virtualization = () => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            const fetchData = async () => {
                  setLoading(true);
                  try {
                        const mockData = Array.from({ length: 10000 }, (_, i) => ({
                              id: i,
                              title: `Item ${i + 1}`,
                              content: `This is content from Item ${i + 1}`
                        }))
                        setData(mockData);
                        setLoading(false);
                        
                  } catch (error) {
                        console.log(error)
                  }
            }
            fetchData();
      }, []);

      if (loading) return <div className='text-xl text-center animate-pulse'>Loading....</div>
      
      const Row = ({ index , style}) => (
            <div style={style} className="list-item border-t border-r border-l p-2 text-center ">
                  <h3>{data[index].title}</h3>
                  <h3>{data[index].content}</h3>
            </div>
      )

  return (
        < div className=' list-container '>
              <h1>10,000 List Items(Virtualized)</h1>
              <List
                    height={600}        // Height of visible area
                    itemCount={data.length}
                    itemSize={60}  
                    width="110%"
              >
                    {Row}
                  </List>
        </div>
  )
}

export default Virtualization