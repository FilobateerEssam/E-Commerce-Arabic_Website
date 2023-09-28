//  التصنيفات                     المزيد 
const SubTitle = ({title , btntitle}) => {

    return ( 
        <div className="d-flex justify-content-between pt-4">

        <div className="sub-tile">{title}</div>
        {/* if btntitle is true then show the button else show nothing but show to user title only */}
        {btntitle ? (
            
                <div className="shopping-now">{btntitle}</div>
        ) : null}
    </div>
     );
}
 
export default SubTitle;