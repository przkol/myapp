import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPeopleRequest } from "../../api/starWars";

export const getPeople=createAsyncThunk('/starWars/getPeople',()=>
getPeopleRequest())