import ast
import time
import numpy as np
import pandas as pd
import warnings
warnings.filterwarnings(action='ignore')
import gensim



class WordVector():
    def __init__(self):
        #self.word2vec_model = self.get_word2vec_model()
        #self.fasttext_model = self.get_fasttext_model()
        #self.glove_model = self.get_glove_model()
        self.word2vec_model = None
        self.fasttext_model = None
        self.glove_model = None

        
    def get_word2vec_model(self):
        start_time = time.time()
        word2vec_path  = './word-embeddings/word2vec/word2vec'
        word2vec_model = gensim.models.Word2Vec.load(word2vec_path)
        print(f' pretrained word2vec model 로드 완료: {time.time()-start_time}')
        return word2vec_model

    
    def get_fasttext_model(self):
        start_time = time.time()
        fasttext_path  = './word-embeddings/fasttext/fasttext.bin'
        fasttext_model = gensim.models.fasttext.load_facebook_model(fasttext_path)
        print(f' pretrained fasttext model 로드 완료: {time.time()-start_time}')
        return fasttext_model
    
    
    def get_glove_model(self):
        start_time = time.time()
        glove_path  = './word-embeddings/glove/glove.txt'
        glove_model = dict()
        file = open(glove_path, encoding='utf8')
        for line in file:
            word_vector = line.split()
            word = word_vector[0]
            
            word_vector_arr = np.asarray(word_vector[1:], dtype='float32')
            glove_model[word] = word_vector_arr
        file.close()
        print(f' pretrained glove model 로드 완료: {time.time()-start_time}')
        return glove_model
        
        
    def word2vec_vectors(self, words):
        words = ast.literal_eval(words)
        vectors = []
        
        for word in words:
            try: vector = list(self.word2vec_model.wv[word])
            except: vector = [0]
            vectors.append(vector)
        return vectors
    
    
    def fasttext_vectors(self, words):
        words = ast.literal_eval(words)
        vectors = []
        
        for word in words:
            try: vector = list(self.fasttext_model.wv[word])
            except: vector = [0]
            vectors.append(vector)
        return vectors
    
    
    def glove_vectors(self, words):
        words = ast.literal_eval(words)
        vectors = []
        
        for word in words:
            try: vector = list(self.glove_model[word])
            except: vector = [0]
            vectors.append(vector)
        return vectors        



if __name__ == "__main__":
    # 전시회 정보 불러오기
    filename = ''
    data = pd.read_csv(f'./{filename}')
    
    
    # 임베딩 벡터 반환
    word_vector = WordVector()
    data['word2vec'] = data['키워드']
    data['word2vec'] = data['word2vec'].apply(word_vector.word2vec_vectors)
    
    data['fasttext'] = data['키워드']
    data['fasttext'] = data['fasttext'].apply(word_vector.fasttext_vectors)
    
    data['glove'] = data['키워드']
    data['glove'] = data['glove'].apply(word_vector.glove_vectors)

    
    # 임베딩 정보 저장
    data.to_csv(f'./임베딩{filename[3:]}', encoding='utf-8-sig', index=False)
    print(f' {filename} 임베딩 저장이 완료되었습니다!')