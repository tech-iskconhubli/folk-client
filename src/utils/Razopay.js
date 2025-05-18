import axios from "axios";

export const makePayment =async(amount)=>{
        
        const data = await axios.post("https://folk-server-fbkr.onrender.com/api/payments/order", {amount})


    var options = {
        key: "rzp_test_KFMbDieVn7k8vK", 
        amount: amount * 100, 
        currency: "INR",
        name: "sai kiran",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id, 
        handler: function (response) {
          console.log("payment Id:- ", response.razorpay_payment_id);
          console.log("Order Id:- ", response.razorpay_order_id);
          console.log("Signature:- ", response.razorpay_signature);
        },
        prefill: {
          name: "sai kiran",
          email: "saikiran@gmail.com",
          contact: "8688487669",
        },
        notes: {
          address: "sai kiran Bangalore",
        },
        theme: {
          color: "#3399cc",
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.open()
}
