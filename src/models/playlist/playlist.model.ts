/*


  __  __ _   _______             _    
 |  \/  (_) |__   __|           | |   
 | \  / |___  _| |_ __ __ _  ___| | __
 | |\/| | \ \/ / | '__/ _` |/ __| |/ /
 | |  | | |>  <| | | | (_| | (__|   < 
 |_|  |_|_/_/\_\_|_|  \__,_|\___|_|\_\
                                      
* Author: Jordan (LIFELINE) <hello@lifeline1337.dev>
* Copyright (C) 2023 LIFELINE
* Repo: https://github.com/lifeline1337/mixtrack-restful
* LICENSE: MIT <https://github.com/lifeline1337/mixtrack-restful/blob/main/LICENSE>
*/

import mongoose from "mongoose";
import { IPlaylist } from "./playlist.type";

const PlaylistModel = new mongoose.Schema({
  name: {type: String, required: true},
  isActive: {type: Boolean, default: false},
  owner: {type: mongoose.Types.ObjectId, required: true, ref: "accounts"},
  songs: [{
    title: {type: String, required: true},
    cid: {type: String, required: true},
    type: {type: String, default: "YT"},
    duration: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    unavailable: {type: Boolean, required: true}
  }]
});

PlaylistModel.set("toJSON", {
  versionKey: false,
  virtuals: true,
  transform(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export default mongoose.model<IPlaylist>("playlists", PlaylistModel);