var HtmlwebpackPlugin = require('html-webpack-plugin');
//������һЩ�ļ��е�·��
var path=require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //��Ŀ���ļ��� ����ֱ�����ļ������� Ĭ�ϻ���index.js Ҳ����ȷ�����ĸ��ļ�����
    entry: APP_PATH,
    //������ļ��� �ϲ��Ժ��js������Ϊbundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //������ǵĲ�� ���Զ�����һ��html�ļ�
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],

    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                /*test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: APP_PATH*/
                test: [/\.scss$/],
                loaders: ['style-loader', 'css-loader'],
                include: APP_PATH
            },
            { test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

};