import React, { useState } from 'react'

function ProfileBlock(props: any) {
    const previewImage = [...props.image]
    const [previewIndex, setPreviewIndex] = useState<number>(0);
    return (
        <div>
            <div className='pr-auto w-full h-[18rem] overflow-hidden'>
                <img className='w-full h-full object-cover' src={previewImage[previewIndex]} alt="profile-iamge" />
            </div>
            <div className='pl-auto pr-auto flex justify-between'>
                {
                    previewImage.map((image, index) =>
                        (index == previewIndex) ||
                        (
                            <div key={index} className='mt-2 w-[6rem] h-[6rem] overflow-hidden drop-shadow' onClick={() => setPreviewIndex(index)}>
                                <img className='h-full w-full align-top object-cover block' src={image} alt={`preview-img-${index}`} />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ProfileBlock