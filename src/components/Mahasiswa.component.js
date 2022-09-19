export const MahasiswaForm = (props) => {
  return (
    <div className="card p-3 shadow bg-dark text-white">
      <div className="card-body">
        {props.isEdit ? <h4>Ubah Mahasiswa {props.mahasiswa.name}</h4> : <h4>Add Student</h4>}
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Student Number</label>
            <input type="text" name="nik" value={props.mahasiswa.nik || ''} className="form-control" onChange={props.handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Your Name</label>
            <input type="text" name="name" value={props.mahasiswa.name || ''} className="form-control" onChange={props.handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Majoring in College</label>
            <select className="form-select" name="jurusan" onChange={props.handleChange} value={props.mahasiswa.jurusan || ''}>
              <option value="">Pilih Jurusan</option>
              {props.data.jurusan.map((val, index) => (
                <option key={index}>{val}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Student Status</label>
            <select className="form-select" name="status" onChange={props.handleChange} value={props.mahasiswa.status || ''}>
              <option value="">Pilih Status</option>
              {props.data.status.map((val, index) => (
                <option key={index}>{val}</option>
              ))}
            </select>
          </div>
          {props.isEdit ? (
            <>
              <button type="submit" className="btn btn-warning">
                Update
              </button>
              &nbsp;
              <button onClick={props.handleCancelEdit} type="submit" className="btn btn-secondary">
                Cancel
              </button>
              &nbsp;
              <button onClick={props.handleRemove} type="submit" className="btn btn-danger">
                Remove
              </button>
            </>
          ) : (
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export const MahasiswaTable = (props) => {
  return (
    <div className="card p-3 shadow bg-dark text-white">
      <div className="card-body">
        <h3>Tabel Mahasiswa</h3>
        <table className="table text-white">
          <thead>
            <tr>
              <th>NIK</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.mahasiswaList.map((mahasiswa, index) => (
              <tr key={index} onClick={() => props.getMahasiswa(mahasiswa, index)} style={{ cursor: 'pointer' }}>
                <td>{mahasiswa.nik}</td>
                <td>{mahasiswa.name}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>{mahasiswa.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
