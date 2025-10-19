import { Spinner } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { zustandStore } from '../../Hooks/zustandStore';
import Breadcrumb from '../Navigation/Breadcrumb';

async function getProduct(productId) {
	const res = await axios.get(`https://upg-zu5r.onrender.com/products/${productId}`);
	return res.data;
}

const ProductInfo = () => {
	const { productId } = useParams();
	const [mainImage, setMainImage] = useState('');
	const [loading, setLoading] = useState(true);
	const { data: product, isLoading } = useQuery({
		queryKey: ['product', productId],
		queryFn: () => {
			return getProduct(productId);
		},
	});

	const { favorite, addToFavorite, removeFromFavorite, addToCart } =
		zustandStore();

	// product mavjud bo‘lmasa, xatolik chiqmasligi uchun himoyalangan
	const isFavorite = product ? favorite.some(id => id === product._id) : false;

	useEffect(() => {
		if (product) {
			setMainImage(product.images[0]);
		}
	}, [product]);
	if (isLoading)
		return (
			<div className='flex justify-center items-center py-[99px] text-[#0b2b5e]'>
				<Spinner className='w-[50px] h-[50px]' />
			</div>
		);

	if (!product)
		return (
			<div className='font-golos flex justify-center items-center text-center text-3xl text-[#d92e15] py-[106px]'>
				Mahsulot topilmadi
			</div>
		);

	return (
		<div className='justify-between px-14 mt- font-golos mb-4'>
			{/* Rasmlar */}
			<Breadcrumb />
			<div className='flex justify-between items-start'>
				{' '}
				<div className='flex gap-4 items-start'>
					{/* Kichik rasmlar */}
					<div className='flex flex-col gap-2'>
						{product.images.map((img, i) => (
							<div className='border rounded-lg overflow-hidden cursor-pointer hover:border-red h-[54px] w-[54px]'>
								<img
									key={i}
									src={img}
									onClick={() => setMainImage(img)}
									className={`w-full h-full object-contain ${
										mainImage === img ? 'ring-1 ring-[#d92e15]' : ''
									}`}
									alt='thumb'
								/>
							</div>
						))}
					</div>

					{/* Asosiy rasm */}
					<img
						src={mainImage}
						alt={product.name}
						className='w-[419px] h-[419px] object-cover rounded-3xl'
					/>

					{/* Mahsulot haqida */}
					<div className='flex flex-col ml-4'>
						<h2 className='text-2xl font-medium dark:text-white duration-1000'>
							{product.name}
						</h2>
						<div className='mt-6 text-gray-700 dark:text-gray-400 duration-1000'>
							<h3 className='text-lg font-semibold mb-2'>
								Mahsulot haqida qisqacha
							</h3>
							<p className='whitespace-pre-line text-[15px] leading-8'>
								{product.description ||
									'Bu mahsulot haqida hozircha qo‘shimcha ma’lumot yo‘q.'}
							</p>
						</div>
					</div>
				</div>
				{/* Info bo‘limi */}
				<div className='flex flex-col gap-6 w-[328px] h-[260px] p-[24px] shadow-lg  rounded-lg border duratinon-1000'>
					{/* Narx */}
					<div className='flex justify-between items-start'>
						<div className='text-[20px] font-medium text-black flex flex-col dark:text-white duration-1000'>
							<div className='text-xs line-through text-[#6c7178] dark:text-gray-500 duration-1000'>
								{product.fullPrice.toLocaleString()} so'm
							</div>
							{product.sellPrice.toLocaleString()} so'm
						</div>
						<div>
							<p className='text-xs font-semibold text-[#6c7178] mt-1.5 dark:text-gray-500 duration-1000'>
								Kod: {product.code}
							</p>
						</div>
					</div>

					{/* Mavjudlik */}
					<div className='flex items-center gap-2'>
						<div className='w-[32px] h-[32px] bg-[#f5f5f7] rounded-md flex items-center justify-center dark:bg-[#50cd47] duration-1000'>
							<IoCartOutline
								size={18}
								className='text-[#50cd47] dark:text-[#f5f5f7] duration-1000'
							/>
						</div>
						<div className='text-sm text-gray-600 dark:text-gray-500 duration-1000'>
							Mahsulotdan hozirda:{' '}
							<span className='font-medium'>{product.available} ta bor</span>
						</div>
					</div>

					{/* Tugmalar */}
					<div className='flex flex-col gap-2'>
						<button className='w-[280px] h-[45px] bg-[#f7f8f8] rounded-xl dark:text-[#f7f7f8] dark:bg-black duration-1000'>
							Bir klikda
						</button>
						<div className='flex items-center gap-2'>
							<button
								className='   dark:text-red dark:bg-white duration-1000    bg-[#d92e15] text-white px-6 py-2 rounded-xl shadow flex items-center gap-2 font-semibold w-[228px] h-[45px] text-center justify-center'
								onClick={() => addToCart(product._id)}
							>
								Savatchaga
							</button>
							<button
								className='text-red-500 text-md w-[44px] h-[44px] flex items-center justify-center rounded-xl bg-[#d92e151f] '
								onClick={() =>
									isFavorite
										? removeFromFavorite(product._id)
										: addToFavorite(product._id)
								}
							>
								{isFavorite ? (
									<FaHeart className='text-red' />
								) : (
									<FaRegHeart className='text-red' />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
