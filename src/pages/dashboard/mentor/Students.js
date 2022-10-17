import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'

const Students = () => {

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	

  const columns = [
    {
      name: 'No',
      selector: row => row.no,
    },
    {
      name: 'Names',
      selector: row => row.names,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
    },
    {
      name: 'Whatsapp',
      selector: row => row.whatsapp,
    },
    {
      name: 'Share Resources',
      selector: row => row.share,
    },
];

const data = [
    {
        no: 1,
        names: 'John Doe',
        phone: '+250784243483',
        whatsapp: '+250784243483',
        share: <button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
      no: 2,
      names: 'Jne Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
      no: 3,
      names: 'Halt Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
      no: 4,
      names: 'John Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
      no: 5,
      names: 'Jne Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
      {
        no: 6,
        names: 'Halt Doe',
        phone: '+250784243483',
        whatsapp: '+250784243483',
        share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
      },{
        no: 7,
        names: 'John Doe',
        phone: '+250784243483',
        whatsapp: '+250784243483',
        share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
      no: 8,
      names: 'Jne Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
      no: 9,
      names: 'Halt Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },{
      no: 10,
      names: 'John Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
    no: 11,
    names: 'Jne Doe',
    phone: '+250784243483',
    whatsapp: '+250784243483',
    share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
    no: 12,
    names: 'Halt Doe',
    phone: '+250784243483',
    whatsapp: '+250784243483',
    share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },{
      no: 13,
      names: 'John Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
    no: 14,
    names: 'Jne Doe',
    phone: '+250784243483',
    whatsapp: '+250784243483',
    share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
    no: 15,
    names: 'Halt Doe',
    phone: '+250784243483',
    whatsapp: '+250784243483',
    share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },{
      no: 16,
      names: 'John Doe',
      phone: '+250784243483',
      whatsapp: '+250784243483',
      share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
    no: 17,
    names: 'Jne Doe',
    phone: '+250784243483',
    whatsapp: '+250784243483',
    share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
    {
    no: 18,
    names: 'Halt Doe',
    phone: '+250784243483',
    whatsapp: '+250784243483',
    share:<button className='w-[150px] h-[40px] rounded-lg bg-[#0081a7] text-[#fff]'>Upload</button>
    },
]


const FilterComponent = () => {
  return (
    <div>
      <input className='w-[300px] h-[40px] border-[1px] rounded-l-lg border-[#0081a7] pl-5' placeholder='Search here.' />
      <button className='text-[18px] text-[#fff] w-[100px] h-[40px] bg-[#0081a7] rounded-r-lg'>x</button>
    </div>
  )
}

const filteredItems = data.filter(
  item => item.names && item.names.toLowerCase().includes(filterText.toLowerCase()),
);

const subHeaderComponentMemo = React.useMemo(() => {
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };
  // onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText}
  return (
    <FilterComponent />
  );
}, [filterText, resetPaginationToggle]);


// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('dark', {
  background: {
    default: 'transparent',
  },
});

  

  return (
    <div className='bg-[rgb(24,39,71)] w-full h-full'>
        <div className='w-full h-[70px] bg-[#0081a7] '>
            <h1 className='text-[25px] font-bold text-white ml-[340px] pt-2'><span className='font-light'>Hi</span> Jane Doe!</h1>
        </div>
        <div className='w-[1100px] pb-20 mx-auto mt-10'>
            <h1 className='text-white text-[45px] font-bold mb-5'>Students</h1>
            <DataTable 
              title='All Students'
              theme="solarized" 
              columns={columns}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              data={filteredItems} 
              pagination={true}
              sortable={true}
              highlightOnHover={true}
              pointerOnHover={true}
              customStyles={{
                headRow: {
                  style: {
                    fontWeight: 'bold',
                    fontSize: 14,
                  }
                },
              }}
            />
        </div>
    </div>
  )
}

export default Students