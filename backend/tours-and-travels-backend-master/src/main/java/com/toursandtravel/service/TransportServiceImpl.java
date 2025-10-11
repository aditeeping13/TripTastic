package com.toursandtravel.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toursandtravel.dao.TransportDao;
import com.toursandtravel.entity.Transport;

@Service
public class TransportServiceImpl implements TransportService {

	@Autowired
	private TransportDao transportDao;

	@Override
	public Transport add(Transport transport) {
		// TODO Auto-generated method stub
		return transportDao.save(transport);
	}

	@Override
	public Transport update(Transport transport) {
		// TODO Auto-generated method stub
		return transportDao.save(transport);
	}

	@Override
	public Transport getById(String id) {

		Optional<Transport> optionalTransport = this.transportDao.findById(String.valueOf(id));

		if (optionalTransport.isEmpty()) {
			return null;
		}

		return optionalTransport.get();
	}

	@Override
	public List<Transport> getAllByStatus(String status) {
		// TODO Auto-generated method stub
		return this.transportDao.findByStatus(status);
	}

}
