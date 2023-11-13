const YourComponent = () => {
    useEffect(() => {
      // Initialize Remodal when the component mounts
      document.addEventListener('DOMContentLoaded', function() {
        const myDiv = document.getElementById("scroll-container");
  
        myDiv.addEventListener("click", function() {
          const modal = $('[data-remodal-id=modal]').remodal(); // Get Remodal instance
          modal.open(); // Open the Remodal modal
        });
      });
  
      // Cleanup the event listener on component unmount
      return () => {
        const myDiv = document.getElementById("scroll-container");
  
        if (myDiv) {
          myDiv.removeEventListener("click", handleDivClick);
        }
      };
    }, []); // Empty dependency array ensures the effect runs only on mount
  
    return (
      <div>
        {/* Your React JSX here */}
        <div id="scroll-container">
          {/* Your scroll container content */}
        </div>
  
        {/* Remodal component */}
        <div className="remodal" data-remodal-id="modal" style={{ userSelect: 'none' }}>
          <button data-remodal-action="close" className="remodal-close"></button>
          <div id="test-popup"></div>
          <br />
        </div>
      </div>
    );
  };
  
  export default YourComponent;