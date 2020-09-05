import {Fatch_Filter_DATA,
        FATCH_FOR_PANEL,
        FILTER_HANDLE,
        FATCH_SEARCH_RESULT} from './type'
import axios from 'axios'



export const fatch_filter_data=()=>dispatch=>{

        try{
            axios.get('http://data.educationmandal.com/ClassFilter/Filter')
            .then((res)=>dispatch({
                type:Fatch_Filter_DATA,
                payload:res.data
            })
            )
        }
        catch(err)
        {
            console.log(err)
        }
}

//fatch panel filteraion pill
export const fatch_panel_data=()=>async dispatch=>{

    try{
        await axios.get('http://localhost:5000/ClassFilter/FilterOption1')
        .then((res)=>dispatch({
            type:FATCH_FOR_PANEL,
            payload:res.data
        })
        )
    }
    catch(err)
    {
        console.log(err)
    }

}

//handle the reuest of filter panel
export const Filter_Handle=(Filter)=>dispatch=>{
    try{
       dispatch({
            type:FILTER_HANDLE,
            payload:Filter
        })

    }
    catch(err)
    {
        console.log(err)
    }
}


export const fatch_seacrh_data=(Search)=>async dispatch=>{

    try{
        await axios.post('http://data.educationmandal.com/ClassFilter/Search',{Search:Search})
        .then((res)=>dispatch({
            type:FATCH_SEARCH_RESULT,
            payload:res.data
        })
        )
    }
    catch(err)
    {
        console.log(err)
    }

}




