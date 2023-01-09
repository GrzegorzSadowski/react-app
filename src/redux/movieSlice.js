import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = []

export const getMovies = createAsyncThunk(
  '/movies',
  async (thunkAPI) => {
    const res = await fetch('http://localhost:8080/movies').then(
    (data) => data.json()
  )
  return res

})


export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
    addMovie(state, action){
      const str = JSON.stringify(action.payload, null, 4)
      console.log(str);
      state.push(action.payload)
      console.log("after " + + state.length)
    },

    deleteMovie(state, action){
      const str = JSON.stringify(action.payload, null, 4)
      console.log("before " + state.length)
      console.log(str); 
      return state = state.filter((mov) => mov.id !== action.payload);
      
      
    },


    updateMovie(state, action){
      return state = state.map((filmItem) => {
        return action.payload.id === filmItem.id ? action.payload : filmItem;
      });
    },

    sortMovie(state, action){
      const sort_by = (field) => {
        const key = (x) => {return x[field]};
        return function(a, b) {
        return a = key(a), b = key(b),  ((a > b) - (b > a));
        }
      } 
      return state.sort(sort_by(action.payload));
    }
    
  },
  extraReducers(builder) {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      
      return action.payload.sort( function(a, b) {
        return a = a["releaseDate"], b = b["releaseDate"] ,  ((a > b) - (b > a));
      });
      
      
       
     //return action.payload;
       
        
    })
}
})

export const {deleteMovie, updateMovie, addMovie, sortMovie} = movieSlice.actions



export const selectAllMovies = (state) => state.movies

export default  movieSlice.reducer