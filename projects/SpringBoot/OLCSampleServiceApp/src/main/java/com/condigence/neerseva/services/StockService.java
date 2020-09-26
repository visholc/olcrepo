package com.condigence.neerseva.services;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condigence.neerseva.entity.Stock;
import com.condigence.neerseva.repository.StockRepository;

@Service("stockServices")
public class StockService {
	public static final Logger logger = LoggerFactory.getLogger(StockService.class);
	@Autowired
	private StockRepository stockRepo;

	public Stock saveStock(Stock stock) {
		return stockRepo.save(stock);
	}

	public Optional<Stock> getStockById(long id) {
		return stockRepo.findById(id);
	}

	public void deleteStockById(long stockId) {
		stockRepo.deleteById(stockId);
	}

	public Stock getStockByShopAndItemId(long l, long m) {
		Optional<Stock> stock = stockRepo.getItemStockForShop(l,m);
		if(!stock.isPresent()) {
			Stock s = null;
			return s;
		}else {
			return stock.get();
		}
	}
	
	
	public List<Stock> getStockByShopId(long id) {
		return stockRepo.getStockForShop(id);
		
	}

}
