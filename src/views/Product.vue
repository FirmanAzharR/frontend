<template>
	<div class="product">
		<div>
			<b-container fluid class="bv-example-row">
				<div style="padding:20px">
         <h3>Create, Read, Update, Delete, Search & Pagination</h3>
         <br>
					<b-row style="margin-top:30px;margin-bootom:10px">
						<b-col>
							<router-link
							:to="{ name: 'AddProduct' }"
							class="link"
							style="background-color:#6A4029;color:white;padding:5px;font-weight:500;border:none"
							>Add Product</router-link
							>
						</b-col>
						<b-col>
							<b-form-input
							id="search"
							style="max-width:300px;float:right"
							placeholder="Search Product; Empty search show all"
							type="text"
							v-model="cari"
							@keyup.enter="search"
							></b-form-input>
						</b-col>
					</b-row>
					<div
					style="margin-top:50px"
					class="animate__animated animate__fadeIn"
					>
					<b-row>
						<b-col
						xl="2"
						lg="2"
						md="2"
						sm="4"
						cols="6"
						v-for="(item, index) in products"
						:key="index"
						>
						<div class="item font1 centered">
							<router-link
							:to="{
							name: 'EditProduct',
							params: { id: item.id_barang }
						}"
						>
						<b-card
						class="card-item"
						style="border-radius: 0px;border:none;color:#8B5830;"
						>
						<div align="center">
							<img
							:src="
							item.foto === ''
							? require('../assets/img/box.png')
							: `${ENV}/fileUploadsApi1/` +
							item.foto
							"
							alt=""
							class="item-img"
							/>
							<h6
							style="font-weight:bold;font-size:18px"
							class="font1"
							>
							{{ item.nama }}
						</h6>
						<h6
						class="font1"
						style="font-weight:bold;color:#8B5830;"
						>
						IDR {{ item.harga_jual }}
					</h6>
				</div>
			</b-card>
		</router-link>
	</div>
</b-col>
</b-row>
<div class="overflow-auto">
	<b-pagination
	v-model="currentPage"
	:total-rows="rows"
	:per-page="limit"
	@change="changePage"
	></b-pagination>
</div>
</div>
</div>
</b-container>
</div>
</div>
</template>

<script>
	import { mapActions, mapGetters, mapMutations } from 'vuex'
	export default {
		name: 'Product',
		components: {
		},
		data() {
			return {
				ENV: `${process.env.VUE_APP_PORT}`,
				user: 1,
				currentPage: 1,
        cari:''
			}
		},
		computed: {
			...mapGetters({
				products: 'getDataProduct',
				page: 'getPageProduct',
				limit: 'getLimitProduct',
				rows: 'getTotalRowsProduct',
      // setUser: 'setUser'
  })
		},
		created() {
			this.productSearchs('')
			this.handleChangePage(1)
			this.getProducts()
		},
		methods: {
			...mapActions(['getProducts']),
			...mapMutations([
				'handleChangePage',
				'productSearchs'
				]),
			changePage(numberPage) {
				this.handleChangePage(numberPage)
				this.getProducts()
			},
			search() {
				this.productSearchs(this.cari)
				this.getProducts()
			}
		}
	}
</script>

<style>
	.nav-font-size {
		font-size: 20px;
	}
	.font1 {
		font-family: 'Poppins', sans-serif;
	}
	.font2 {
		font-family: 'Rubik', sans-serif;
	}
	.link {
		color: #6a4029;
	}
	.link:hover {
		color: #6a4029;
		font-weight: 400;
	}
	.centered {
		display: grid;
		justify-content: center;
	}
	.item-img {
		width: 130px;
		height: 130px;
		position: relative;
		top: 0px;
		left: 0px;
	}
	.card-item {
		max-width: 16rem;
		margin-bottom: 50px;
		height: 16rem;
		width: 12rem;
		-webkit-box-shadow: 1px 5px 12px 0px #2e2d2d54;
		-moz-box-shadow: 1px 5px 12px 0px #2e2d2d54;
		box-shadow: 1px 5px 12px 0px #2e2d2d54;
	}

	@media only screen and (max-width: 600px) {
		.nav-font-size {
			font-size: 17px;
		}
		.card-item {
			max-width: 9rem;
			height: 13rem;
			width: 9rem;
		}
		.item-img {
			width: 110px;
			height: 110px;
		}
	}
</style>
