export const KadeDescription = () => {
    return(
      
      <div id='about'>
        {/* className='text-center' */}
        <div className='container'  >
          <div className='row'>
            <div className='col-md-12' >

              <div className='section-title' >
                <h2 style={{color:'white'}}>Title</h2>
                <p style={paraStyle1}>Description</p>
              
              </div>
           
            </div>
          </div>

        </div>
      </div>
      
    );
    }

    // const aboutStyle = {
    //   background: 'steelblue',
    //   display: 'flex',
    //   justifycontent: 'space-between',
    //     backgroundimage: "linear-gradient(to right, steelblue , yellow);",
    //       }

    const aboutStyle1 = {
      display: 'flex',
      justifycontent: 'space-between',
          }


    const paraStyle1 = {
      color: '#f8fcfc',
    //   marginright: '1.5rem',
      textAlign: 'justify',
    }
