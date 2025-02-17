// import { Globe, Factory, Car, Shield, Upload } from 'lucide-react';
// import { useState, useRef } from 'react';

// const cards = [
//   {
//     icon: Globe,
//     title: 'American Society of Mechanical Engineers (ASME)',
//     description: 'A global organization advancing the engineering profession through knowledge, collaboration, and innovation.',
//   },
//   {
//     icon: Factory,
//     title: 'American Petroleum Institute (API)',
//     description: 'Setting standards for the oil and natural gas industry to ensure safety, environmental protection, and efficiency.',
//   },
//   {
//     icon: Car,
//     title: 'Society of Automotive Engineers (SAE)',
//     description: 'A professional association for engineers in the automotive, aerospace, and commercial vehicle industries.',
//   },
//   {
//     icon: Shield,
//     title: 'American Society of Non-Destructive Testing (ASNT)',
//     description: 'The world’s largest technical society for nondestructive testing professionals.',
//   },
// ];

// const GetStarted = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleButton = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!file || !name || !email) {
//       setSuccess('Please fill in all fields and upload a file.');
//       setLoading(false);
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('message', message);

//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send email');
//       }

//       const data = await response.json();
//       setSuccess(data.success || 'Email sent successfully!');
//     } catch (error) {
//       console.error(error);
//       setSuccess('There was an error sending the email.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen">
//       <section className="pt-32 pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
//             Get Started with Our Services
//           </h1>
//           <div className="grid grid-cols-2 gap-8">
//             {cards.map((card, index) => (
//               <div key={index} className="group p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
//                 <card.icon className="h-8 w-8 text-blue-500 mb-4" />
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       <section className="py-20">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
//             <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//               Ask us any Questions
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block font-medium">Name</label>
//                 <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 rounded-lg border text-black" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block font-medium">Email</label>
//                 <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 rounded-lg border text-black" />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block font-medium">Message</label>
//                 <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="w-full px-4 py-2 rounded-lg border text-black" />
//               </div>
              
//               {/* File Upload Section */}
//               <div>
//                 <label className="block font-medium">Document Upload</label>
                
//                 {file ? (
//                   <div className="w-full h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed p-4">
//                     <p className="text-gray-700">{file.name}</p>
//                     <button
//                       type="button"
//                       onClick={() => setFile(null)}
//                       className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleButton}
//                     className="w-full h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed"
//                   >
//                     <Upload className="h-10 w-10" />
//                     <span>Click to upload</span>
//                   </button>
//                 )}
                
//                 <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" required />
//               </div>

//               <button type="submit" disabled={loading} className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//                 {loading ? 'Sending...' : 'Send Message'}
//               </button>
//               {success && <p className="mt-4 text-center text-lg font-medium text-green-600">{success}</p>}
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GetStarted;
import { Upload } from 'lucide-react';
import { useState, useRef } from 'react';

const GetStarted = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!file || !name || !email) {
      setSuccess('Please fill in all fields and upload a file.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://v-spec-backend.onrender.com/send-email', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      setSuccess(data.success || 'Email sent successfully!');
    } catch (error) {
      console.error(error);
      setSuccess('There was an error sending the email.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Ask us any Questions
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 rounded-lg border text-black" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 rounded-lg border text-black" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">Message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="w-full px-4 py-2 rounded-lg border text-black" />
              </div>
              
              {/* File Upload Section */}
              <div>
                <label className="block font-medium">Document Upload</label>
                
                {file ? (
                  <div className="w-full h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed p-4">
                    <p className="text-gray-700">{file.name}</p>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleButton}
                    className="w-full h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed"
                  >
                    <Upload className="h-10 w-10" />
                    <span>Click to upload</span>
                  </button>
                )}
                
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" required />
              </div>

              <button type="submit" disabled={loading} className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && <p className="mt-4 text-center text-lg font-medium text-green-600">{success}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
