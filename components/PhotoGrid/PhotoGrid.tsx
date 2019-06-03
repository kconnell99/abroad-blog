import React from 'react';

export default function PhotoGrid({photos}:any){
    console.log(photos)
    return(
        <div>
            {photos && photos.data.map((photo:any)=>
                <div key={photo.sys.id}>    
                    <img src = {photo.fields.photo.fields.file.url}/>
                    {/* todo: on click, photo enlarges and caption is shown */}
                    <p>{photo.fields.photo.fields.description}</p>
                </div>
                )
            }

        </div>
    )
}
