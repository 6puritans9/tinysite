<form>
	<div class="space-y-12">
		<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="col-span-full">
				<label for="about" class="block text-base font-semibold leading-6 text-gray-900"
					>새 글 쓰기</label
				>
				<div class="mt-2">
					<textarea
						id="about"
						name="about"
						rows="5"
						placeholder="내용을 입력하세요"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					></textarea>
				</div>
			</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<a href="/" class="text-sm font-semibold leading-6 text-gray-900">돌아가기</a>
			<button
				type="submit"
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>저장</button
			>
		</div>
	</div>
</form>
