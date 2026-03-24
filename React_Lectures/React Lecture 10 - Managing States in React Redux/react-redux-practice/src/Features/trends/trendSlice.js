import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTrends = createAsyncThunk(
    "trends/fetchTrends",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        return data.slice(0, 20).map((item) => ({
            id: item.id,
            title: item.title,
            category: ["Tech", "Business", "AI"][item.id % 3],
            score: Math.floor(Math.random() * 100)
        }));
    }
)

const trendSlice = createSlice({
    name: "trends", 
    initialState: {
        items: [],
        saved: [],
        status: "idle",
        filter: "All"
    },
    reducers: {
        saveTrend: (state, action) => {
            if(!state.saved.includes(action.payload)){
                state.saved.push(action.payload);
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrends.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(fetchTrends.fulfilled, (state, action) => {
            state.status = "Success";
            state.items = action.payload;
        })
        .addCase(fetchTrends.rejected, (state) => {
            state.status = "Failed";
        })
    }
})

export const {saveTrend, setFilter} = trendSlice.actions;
export default trendSlice.reducer;