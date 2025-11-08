const GetEarlyAccessSection = () => {
    return (
        <section className="w-full h-[85vh] px-12" style={{ marginTop: 0, marginBottom: 0 }}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center text-center relative mb-10">
                    <h2 className="text-4xl font-[470] leading-[120%] tracking-tight text-content-primary max-[800px]:text-3xl">
                        Get early access to Sapic
                    </h2>
                    <div className="relative z-50 mt-7"><button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors duration-xslow ease-extreme-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-button-primarydefault text-content-tertiary hover:bg-button-primaryhover hover:text-content-primary z-50 h-11 px-4 min-w-[160px] text-xs font-medium tracking-wider leading-145 max-[800px]:text-2xs max-[800px]:h-[38px] max-w-[800px]:px-2 relative">Get
                        started<svg width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" className="size-3">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M38.4276 48.4568C37.6464 49.2389 36.3791 49.2397 35.5969 48.4585C34.8148 47.6773 34.814 46.4099 35.5952 45.6278L47.2162 34.0209H12.01C10.9054 34.0209 10.01 33.1255 10.01 32.0209C10.01 30.9163 10.9054 30.0209 12.01 30.0209H47.1823L35.5952 18.4478C34.814 17.6656 34.8148 16.3983 35.5969 15.6171C36.3791 14.8359 37.6464 14.8366 38.4276 15.6188L53.45 30.6233C54.2312 31.4029 54.2326 32.6682 53.4529 33.4494C53.452 33.4504 53.451 33.4514 53.45 33.4524L38.4276 48.4568Z">
                            </path>
                        </svg></button></div>
                </div>
            </div>
        </section>
    );
};

export default GetEarlyAccessSection;