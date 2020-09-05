import{Fatch_Filter_DATA, 
        FATCH_FOR_PANEL,
        FILTER_HANDLE,
        FATCH_SEARCH_RESULT
    } from '../action/type'


const initialstate={
    Data:[],
    DemoData:[],
    PanelData:[]
}



const FilterData=(state=initialstate,action)=>{

    let ClassID=[]
    
    console.log('Filter:-',action)

    //for City
    state.DemoData.filter(
        (data)=>action.City.indexOf(data.City) in action.City)
        .map((id)=>
        {   
            ClassID.push(id.ClassID)
        })

    //state
    state.DemoData.filter((data)=>action.State.indexOf(data.State) in action.State).map((id)=>{ClassID.push(id.ClassID)})

    //Course
    state.DemoData.map((data)=>data.Course.filter((data)=>action.Course.indexOf(data.Name) in action.Course)
        .map((id)=>{ ClassID.push(id.ClassID)}))

    //Stream
    state.DemoData.map((data)=>data.Stream.filter((data)=>action.Stream.indexOf(data.Name) in action.Stream)
        .map((id)=>{ ClassID.push(id.ClassID)}))


    //Type filter
    state.DemoData.filter((data)=>data.Type===action.Type).map((id)=>{ClassID.push(id.ClassID)})


    if(ClassID.length===0)
    {
        return {...state,Data:state.DemoData}
    }
    else
    {
        return {...state,Data:state.DemoData.filter((id)=> ClassID.indexOf(id.ClassID) in ClassID)}
    }
        

}

const FilterHandle=(state=initialstate,action)=>{
        
            

    switch(action.type)
    {
        case Fatch_Filter_DATA:
            return {...state,Data:action.payload,DemoData:action.payload}
        case FATCH_FOR_PANEL:
            return {...state,PanelData:action.payload}
        case FILTER_HANDLE:
            return FilterData(state,action.payload)
        case FATCH_SEARCH_RESULT:
            return{...state,Data:action.payload}
        default:
            return state
    }

}


export default FilterHandle 