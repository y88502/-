/**
 * Created by ling on 2019/2/18.
 */
var vm = new Vue({
    el:"#app",
    data:{
        totalMoney:0,
        productList:[]
    },
    filters:{
        formatMoney:function(value){
            return "￥"+ value.toFixed(2);
        }
    },
    mounted:function(){

        this.$nextTick(function () {
            // 代码保证 this.$el 在 document 中
            this.cartView();
        })
    },
    methods:{
        cartView:function(){
            this.$http.get("data/cartData.json",{"id":123}).then(res=>{
                this.productList = res.data.result.list;
                this.totalMoney = res.data.result.totalMoney
            })
        },
        changeMoney:function (product,type) {
            if(type > 0){
                product.productQuantity++;
            }else{
                product.productQuantity--;
                if(product.productQuantity < 1){
                    product.productQuantity = 1;
                }
            }
        }
    },


})
